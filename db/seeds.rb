# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Studio.destroy_all
FitClass.destroy_all
User.destroy_all

@user = User.create!(username: 'LoonBug', email: 'looneytunes@gmail.com', first_name: 'Bugs', last_name: 'Bunny', password: '123456' )

@space_gym_studio = Studio.create!(business_name: 'SpaceGym', location: 'Outerspace', blurb: 'This gym is out of this world. We offer only the looniest classes to help you get tuned and toned.', format: 'Weight Lifting', image_url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/space-jam-2-character-poster-bugs-bunny-social-featured.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5', user: @user)

@gym_jam_class = FitClass.create!(class_name: 'Gym Jam', schedule_time: '2021-06-24 09:45:00', studio: @space_gym_studio)
@monstar_lift_class = FitClass.create!(class_name: 'Monstar Lift', schedule_time: '2021-06-25 12:30:00', studio: @space_gym_studio)
@body_jordan_class =  FitClass.create!(class_name: 'Body by Jordan', schedule_time: '2021-06-26 10:45:00', studio: @space_gym_studio)
@tasmania_class = FitClass.create!(class_name: 'Tasmania Mania', schedule_time: '2021-06-27 07:15:00', studio: @space_gym_studio)



puts "#{User.count} users created"
puts "#{Studio.count} studios created"
puts "#{FitClass.count} classes created"