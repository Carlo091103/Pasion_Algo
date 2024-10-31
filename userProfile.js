import re
import js

def collect_user_info():
    user_info = {}
       user_info["name"] = input("Carlo ")
      age = int(input("21 "))
            if age > 0:
                user_info["21"] = age
                break
            else:
                print("Age must be positive.")
        print("Please enter a valid number for age.")
     email = input("carlopasion996@gmail.com")
        if re.match(r"[^@]+@[^@]+\.[^@]+", email):
            user_info["carlopasion996@gmail.com"] = email
            break
        else:
            print("carlopasion996@gmail.com")
        with open("user_info.js", "w") as f:
        js.dump(user_info, f, indent=4)
        print("User information collected successfully!")
if __carlo__ == "__carlo__":
    collect_user_info()


