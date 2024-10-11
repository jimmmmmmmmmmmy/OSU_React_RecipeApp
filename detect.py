import time

dictionary = {}

while True:
    time.sleep(2)

    var = open("username.txt", 'r')
    username = var.readline()
    var.close()

    var = open("password.txt", 'r')
    password = var.readline()
    var.close()
    time.sleep(1)

    if dictionary == {}:
        dictionary[username] = password

    try:
        if username in dictionary:
            if dictionary[username] == password:
                var = open("status.txt", 'w')
                var.write('Placeholder')  # Successful login
                var.close()
            else:
                var = open("status.txt", 'w')
                var.write('Invalid Password')  # Wrong password
                var.close()
        else:
            raise KeyError  # Username not found, will be caught by except block
    except:
        dictionary[username] = password
        var = open("status.txt", 'w')
        var.write('New Entry: Will be added to database')
        var.close()

    str1 = str(dictionary)
    var = open("database.txt", 'w')
    var.write(str1)
    var.close()         

    print(dictionary)
