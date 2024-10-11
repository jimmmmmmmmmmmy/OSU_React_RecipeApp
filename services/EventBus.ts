// EventBus.ts
import { EventEmitter } from 'events';

class EventBus {
    /**
   * EventBus is a Singleton class that provides a centralized event management system.
   * It allows different parts of an application to communicate with each other
   * through a publish-subscribe pattern, without direct dependencies.
   * 
   * Features:
   * - Singleton pattern ensures a single instance throughout the application
   * - Publish events with associated data
   * - Subscribe to events with callback functions
   * - Unsubscribe from events when no longer needed
   * 
   * Usage:
   * - Use EventBus.getInstance() to get the singleton instance
   * - Publish events using publish(eventName, data)
   * - Subscribe to events using subscribe(eventName, callbackFunction)
   * - Unsubscribe from events using unsubscribe(eventName, callbackFunction)
   */
  private static instance: EventBus;
  private emitter: EventEmitter;

  // Private constructor to prevent direct instantiation
  private constructor() {
    this.emitter = new EventEmitter();
  }

  // Get the singleton instance of EventBus
  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  // Publish an event with associated data
  public publish(event: string, data: any) {
    this.emitter.emit(event, data);
  }

  // Subscribe to an event with a callback function
  public subscribe(event: string, callback: (data: any) => void) {
    this.emitter.on(event, callback);
  }

  // Unsubscribe from an event
  public unsubscribe(event: string, callback: (data: any) => void) {
    this.emitter.off(event, callback);
  }
}

export default EventBus.getInstance();