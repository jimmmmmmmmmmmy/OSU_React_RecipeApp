import EventBus from './EventBus';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Timer {
  id: string;
  recipeId: string;
  duration: number;
  remainingTime: number;
  isRunning: boolean;
}

class CookingTimerService {
    /**
   * CookingTimerService manages cooking timers for recipes.
   * Provides functionality to start, pause, resume, and stop timers, as well as
   * retrieves timer information. Service uses EventBus for communication and
   * AsyncStorage for persisting timer data.
   *
   * Features:
   * - Create and manage multiple timers for different recipes
   * - Persist timer data across app restarts using AsyncStorage
   * - Publish timer events (start, update, finish, stop) via EventBus
   * - Automatic countdown of running timers
   * - Pause and resume functionality for timers
   *
   * Usage:
   * - The service is instantiated as a singleton
   * - Interact with the service through EventBus subscriptions:
   *   - 'START_TIMER': Start a new timer
   *   - 'PAUSE_TIMER': Pause an existing timer
   *   - 'RESUME_TIMER': Resume a paused timer
   *   - 'STOP_TIMER': Stop and remove a timer
   *   - 'GET_TIMER': Retrieve timer data for a specific recipe
   */

  private timers: Timer[] = [];
  private intervalId: NodeJS.Timeout | null = null;

  constructor() {
    // Set up event listeners
    this.loadTimers();
    EventBus.subscribe('START_TIMER', (data: { recipeId: string; duration: number }) => this.startTimer(data.recipeId, data.duration));
    EventBus.subscribe('PAUSE_TIMER', (data: { timerId: string }) => this.pauseTimer(data.timerId));
    EventBus.subscribe('RESUME_TIMER', (data: { timerId: string }) => this.resumeTimer(data.timerId));
    EventBus.subscribe('STOP_TIMER', (data: { timerId: string }) => this.stopTimer(data.timerId));
    EventBus.subscribe('GET_TIMER', (data: { recipeId: string }) => this.getTimer(data.recipeId));
  }

    // Load saved timers from AsyncStorage
    // Might delete this later, not sure about persistent timers
  private async loadTimers() {
    try {
      const timersJson = await AsyncStorage.getItem('cookingTimers');
      if (timersJson) {
        this.timers = JSON.parse(timersJson);
        this.startInterval();
      }
    } catch (error) {
      console.error('Error loading timers:', error);
    }
  }

  // Save timers to AsyncStorage
  private async saveTimers() {
    try {
      await AsyncStorage.setItem('cookingTimers', JSON.stringify(this.timers));
    } catch (error) {
      console.error('Error saving timers:', error);
    }
  }

  // Interval for timers
  // startInterval sets up a periodic task (every 1000ms or 1 second) to update running timers.
  private startInterval() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        let timerUpdated = false;
        this.timers = this.timers.map(timer => {
          if (timer.isRunning && timer.remainingTime > 0) {
            timer.remainingTime -= 1;
            timerUpdated = true;
            console.log('Timer updated in interval:', timer);
            EventBus.publish('TIMER_UPDATED', timer);
            if (timer.remainingTime === 0) {
              EventBus.publish('TIMER_FINISHED', timer.id);
            }
          }
          return timer;
        });
        if (timerUpdated) {
          this.saveTimers();
        }
      }, 1000);
    }
  }

  // Stop the update interval (needed for pause timer)
  // stopInterval cancels startInterval when it's no longer needed.
  private stopInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Start a new timer
  startTimer(recipeId: string, duration: number) {
    const newTimer: Timer = {
      id: Date.now().toString(),
      recipeId,
      duration,
      remainingTime: duration,
      isRunning: true,
    };
    this.timers.push(newTimer);
    this.saveTimers();
    this.startInterval();
    console.log('Timer started:', newTimer);
    EventBus.publish('TIMER_STARTED', newTimer);
  }

  // Pause an existing timer
  pauseTimer(timerId: string) {
    const timer = this.timers.find(t => t.id === timerId);
    if (timer) {
      timer.isRunning = false;
      this.saveTimers();
      console.log('Timer paused:', timer);
      EventBus.publish('TIMER_UPDATED', timer);
    }
  }

  // Resume a paused timer
  resumeTimer(timerId: string) {
    const timer = this.timers.find(t => t.id === timerId);
    if (timer) {
      timer.isRunning = true;
      this.saveTimers();
      this.startInterval();
      console.log('Timer resumed:', timer);
      EventBus.publish('TIMER_UPDATED', timer);
    }
  }

  // Stop and remove a timer
  stopTimer(timerId: string) {
    this.timers = this.timers.filter(t => t.id !== timerId);
    this.saveTimers();
    if (this.timers.length === 0) {
      this.stopInterval();
    }
    console.log('Timer stopped:', timerId);
    EventBus.publish('TIMER_STOPPED', timerId);
  }

  // Get timer data for a specific recipe
  getTimer(recipeId: string) {
    const timer = this.timers.find(t => t.recipeId === recipeId);
    console.log('Get timer:', timer);
    EventBus.publish('TIMER_DATA', timer || null);
  }
}

export default new CookingTimerService();