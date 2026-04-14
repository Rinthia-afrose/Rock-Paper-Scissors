import random
def check_winner(user, comp):       
    if user == comp:
        return "tie"
    elif(user == "rock" and comp == "scissors") or (user == "paper" and comp == "rock") or (user =="scissors" and comp == "paper"):
        return "user"
    else:
        return "computer"

item_list = ["rock", "paper", "scissors"]
user_score = 0
comp_score = 0

while True:
    user_choice = input("Enter your choice (rock, paper, scissors) or 'q' to quit: ").lower()
      
    if user_choice == 'q':
        print("\nFinal Score:")
        print(f"You: {user_score} | Computer: {comp_score}")
        print("Thanks for playing!")
        break
   
    if user_choice not in item_list:
       print ("Invalid choice. Please choose rock, paper, or scissors.")
       continue

    comp_choice = random.choice(item_list)

    print(f"Your choice: {user_choice}")
    print(f"Computer's choice: {comp_choice}")
    
    result = check_winner(user_choice, comp_choice)
    if result == "tie":
        print("It's a tie!")
    elif result == "user":  
        print("You win!")
        user_score += 1
    else:       
        print("Computer wins!")
        comp_score += 1
    print(f"Current Score - You: {user_score} | Computer: {comp_score}\n")  