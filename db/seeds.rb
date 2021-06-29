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

@user_test = User.create!(username: 'LoonBug', email: 'looneytunes@email.com', first_name: 'Bugs', last_name: 'Bunny', password: '123456' )
@user_yoga = User.create!(username: 'JaneDoe', email: 'janedoe@email.com', first_name: 'Jane', last_name: 'Doe', password: '123456' )
@user_cardio = User.create!(username: 'SamSam', email: 'mark@email.com', first_name: 'Sam', last_name: 'Samson', password: '123456' )
@user_weight = User.create!(username: 'JohnDane', email: 'john@email.com', first_name: 'John', last_name: 'Dane', password: '123456' )


@space_gym_studio = Studio.create!(
  business_name: 'SpaceGym', 
  location: 'Outerspace', 
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
  format: 'cardio', image_url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/space-jam-2-character-poster-bugs-bunny-social-featured.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5', 
  user: @user_test
)

@yoga_studio = Studio.create!(
  business_name: 'YogaFlow', 
  location: 'Chicago, IL', 
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
  format: 'yoga', 
  image_url: 'https://images.unsplash.com/photo-1588783344727-f67e17b45dfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 
  user: @user_yoga
)
@cardio_gym = Studio.create!(
  business_name: 'CardioWorks', 
  location: 'Chicago, IL', 
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
  format: 'cardio', 
  image_url: 'https://images.unsplash.com/photo-1608138278545-366680accc66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
  user: @user_cardio
)
@weight_gym = Studio.create!(
  business_name: 'GymLift', 
  location: 'Chicago, IL', 
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
  format: 'weight-lifting', 
  image_url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 
  user: @user_weight
)


@gym_jam_class = FitClass.create!(class_name: 'Gym Jam', schedule_time: '2021-06-24 09:45:00', studio: @space_gym_studio)
@monstar_lift_class = FitClass.create!(class_name: 'Monstar Lift', schedule_time: '2021-06-25 12:30:00', studio: @space_gym_studio)
@body_jordan_class =  FitClass.create!(class_name: 'Body by Jordan', schedule_time: '2021-06-26 10:45:00', studio: @space_gym_studio)
@tasmania_class = FitClass.create!(class_name: 'Tasmania Mania', schedule_time: '2021-06-27 07:15:00', studio: @space_gym_studio)

@yoga_class_1 = FitClass.create!(class_name: 'Flow I', schedule_time: '2021-06-24 09:45:00', studio: @yoga_studio)
@yoga_class_2 = FitClass.create!(class_name: 'Flow II', schedule_time: '2021-06-25 12:30:00', studio: @yoga_studio)
@yoga_class_3 =  FitClass.create!(class_name: 'Yin', schedule_time: '2021-06-26 10:45:00', studio: @yoga_studio)
@yoga_class_4 = FitClass.create!(class_name: 'Hot Yoga', schedule_time: '2021-06-27 07:15:00', studio: @yoga_studio)

@cardio_class_1 = FitClass.create!(class_name: 'Cardio I', schedule_time: '2021-06-24 09:45:00', studio: @cardio_gym)
@cardio_class_2 = FitClass.create!(class_name: 'Cardio II', schedule_time: '2021-06-25 12:30:00', studio: @cardio_gym)
@cardio_class_3 =  FitClass.create!(class_name: 'Circuit I', schedule_time: '2021-06-26 10:45:00', studio: @cardio_gym)
@cardio_class_4 = FitClass.create!(class_name: 'Circuit II', schedule_time: '2021-06-27 07:15:00', studio: @cardio_gym)

@weight_class_1 = FitClass.create!(class_name: 'Toned', schedule_time: '2021-06-24 09:45:00', studio: @weight_gym)
@weight_class_2 = FitClass.create!(class_name: 'Heavy Weight', schedule_time: '2021-06-25 12:30:00', studio: @weight_gym)
@weight_class_3 =  FitClass.create!(class_name: 'Lift 101', schedule_time: '2021-06-26 10:45:00', studio: @weight_gym)
@weight_class_4 = FitClass.create!(class_name: 'Advanced Lift', schedule_time: '2021-06-27 07:15:00', studio: @weight_gym)






puts "#{User.count} users created"
puts "#{Studio.count} studios created"
puts "#{FitClass.count} classes created"