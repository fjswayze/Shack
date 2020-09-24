# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
Channel.destroy_all
UserChannelJoin.destroy_all

testchannel1 = Channel.create(name: 'shacks', admin_id: 1)
testuser = User.create(email: 'test1997@gmail.com', password: 'hello1997')
testchannel = Channel.create( name: 'test', admin_id: testuser.id)
testchanneljoins = UserChannelJoin.create(user_id: testuser.id, channel_id: testchannel.id)
