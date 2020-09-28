# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
Channel.destroy_all
ChannelMembership.destroy_all

testchannel1 = Channel.create(name: 'shacks', admin_id: 1)

testuser = User.create(email: 'test1997@gmail.com', password: 'hello1997')
ed = User.create(email: 'ed@gmail.com', password: 'shacklover29')
bigshack = User.create(email: 'bigshaq@gmail.com', password: 'quickmaths')
shaq = User.create(email: 'shaq@hotmail.com', password:'lakersbaby')


norwegian_channel = Channel.create(name: 'Norweigian Shacks', admin_id: ed.id)
london_channel = Channel.create(name: 'London Shacks', admin_id: bigshack.id)
los_angeles_shacks = Channel.create(name: 'Shacks of LA', admin_id: shaq.id)



norwegian_channeljoins = ChannelMembership.create(user_id: testuser.id, channel_id: norwegian_channel.id)
norwegian_channeljoins = ChannelMembership.create(user_id: testuser.id, channel_id: london_channel.id)

