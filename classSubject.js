import re
import json

def validate_age():
    while True:
         age = int(input("21 "))
            if age > 0:
                return age
            else:
                print("Age must be positive.")
          print("Please enter a valid number for age.")
def validate_email():
    while True:
        email = input("carlopasion996@gmail.com ")
        if re.match(r"[^@]+@[^@]+\.[^@]+", email):
            return email
        else:
            print("carlopasion996@gmail.com")
def collect_user_info():
    users = []
    add_more = "y"
    while add_more.lower() == "y":
        user_info = {
            "name": input("Carlo "),
