# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all()
Bud.destroy_all()
Server.destroy_all()
Member.destroy_all()
Chatroom.destroy_all()
Message.destroy_all()
DirectMessage.destroy_all()

erick = User.create(username: "Erick", password: "password", image: "https://cdn.webshopapp.com/shops/16221/files/316389637/image.jpg")
rico = User.create(username: "Rico", password: "password1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OyF1xFJthJcf6pAkSoCn2fq2UN3SOX9woQ&usqp=CAU")
vita = User.create(username: "Vita", password: "password2", image: "data:image/jpeg;base64,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")

relationship1 = Bud.create(budder_id: erick.id, buddie_id: rico.id)
relationship2 = Bud.create(budder_id: rico.id, buddie_id: vita.id)
relationship3 = Bud.create(budder_id: vita.id, buddie_id: erick.id)

server1 = Server.create(name: "Video Games", user_id: erick.id)
server2 = Server.create(name: "Motorcycles", user_id: rico.id)
server3 = Server.create(name: "Night's Out", user_id: vita.id)

Member.create(user_id: erick.id, server_id: server1.id, admin: true)
Member.create(user_id: rico.id, server_id: server2.id, admin: true)
Member.create(user_id: vita.id, server_id: server3.id, admin: true)

Member.create(user_id: vita.id, server_id: server1.id, admin: false)
Member.create(user_id: erick.id, server_id: server2.id, admin: false)
Member.create(user_id: rico.id, server_id: server3.id, admin: false)

fpsChatroom = Chatroom.create(title: "FPS", server_id: server1.id)
chopvraceChatroom = Chatroom.create(title: "Choppers vs Racebikes", server_id: server2.id)
barorsmokeChatroom = Chatroom.create(title: "Bar or Hookah Bars?", server_id: server3.id)

openWorldChatroom = Chatroom.create(title: "Best Open World's", server_id: server1.id)
repairsChatroom = Chatroom.create(title: "Bike Repair Help", server_id: server2.id)
plansChatroom = Chatroom.create(title: "Plans!", server_id: server3.id)

Message.create(chatroom_id: fpsChatroom.id, user_id: erick.id, text: "Black Ops 1 was the best FPS")
Message.create(chatroom_id: fpsChatroom.id, user_id: vita.id, text: "Nahh man the original Halo was the best!")
Message.create(chatroom_id: openWorldChatroom.id, user_id: erick.id, text: "No Man's Sky turned out really good!")
Message.create(chatroom_id: openWorldChatroom.id, user_id: vita.id, text: "Yeahh After a year of updates lol")


Message.create(chatroom_id: chopvraceChatroom.id, user_id: erick.id, text: "Racebikes are better because you can race them duhh")
Message.create(chatroom_id: chopvraceChatroom.id, user_id: rico.id, text: "But you can actually relax when you're riding a chopper")
Message.create(chatroom_id: repairsChatroom.id, user_id: erick.id, text: "Does anyone have a wrench I could borrow?")
Message.create(chatroom_id: repairsChatroom.id, user_id: rico.id, text: "Yeahh what are you working on?")


Message.create(chatroom_id: barorsmokeChatroom.id, user_id: vita.id, text: "I really preffer Bars since they have dancefloors personally")
Message.create(chatroom_id: barorsmokeChatroom, user_id: rico.id, text: "I'm atually not much of a drinker so I preffer a Hookah Lounge")
Message.create(chatroom_id: plansChatroom.id, user_id: vita.id, text: "I'm free this weekend if anyone wants to go out!?")
Message.create(chatroom_id: plansChatroom.id, user_id: rico.id, text: "I'm sorry I gotta work this weekend, maybe next weekend!")













