# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Project.destroy_all
Video.destroy_all
Skill.destroy_all
Image.destroy_all

puts 'Seeding Data...'

puts 'Creating Projects...'

Project.create!(
	id: 1,
	name: 'BassoonGuru',
	desc: 'Online Learning Platform',
	details:
		'BassoonGuru is an online learning platform allows users to signup and enroll in a series of video lessons. Users can communicate with each other and the admins through a comments section dedicated to each lesson. Administrators have full CRUD over all Comments and Users',
)

Project.create!(
	id: 2,
	name: 'FIS-Assist',
	desc: 'Helpdesk Issue Management App',
	details:
		'FIS-Assist allows users to communicate questions and issues they are encountering during the Flatiron Prework Module',
)

Project.create!(
	id: 3,
	name: 'Escapade',
	desc: 'South American Travel App',
	details:
		'Escapade allows users to explore a variety of South American Adventures and populate a favorites list',
)

Project.create!(
	id: 4,
	name: 'Pick Your Poison',
	desc: 'Cocktail Recipe App',
	details:
		'Pick Your Poison offers users a selection of clickable cocktails that display detailed recipes. Users can also add new recipes and generate a random, mystery drink.',
)

puts 'Creating Skills...'

Skill.create!(project_id: 1, name: 'React JS', percent: 60)
Skill.create!(project_id: 1, name: 'Ruby on Rails', percent: 30)
Skill.create!(project_id: 1, name: 'Redux, RTK Query', percent: 5)
Skill.create!(project_id: 1, name: 'HTML/CSS', percent: 5)

Skill.create!(project_id: 2, name: 'React JS', percent: 70)
Skill.create!(project_id: 2, name: 'Firebase', percent: 20)
Skill.create!(project_id: 2, name: 'HTML/ CSS', percent: 10)

Skill.create!(project_id: 3, name: 'React JS', percent: 80)
Skill.create!(project_id: 3, name: 'HTML/ CSS', percent: 10)
Skill.create!(project_id: 3, name: 'Heroku/ JSON Server', percent: 10)

Skill.create!(project_id: 4, name: 'JavaScript', percent: 80)
Skill.create!(project_id: 4, name: 'HTML/SCSS', percent: 20)

puts 'Creating urls...'

Url.create!(
	project_id: 1,
	name: 'BassoonGuru',
	desc: 'GitHub',
	address: 'https://github.com/jdhawks2132/bassoonguru',
)

Url.create!(
	project_id: 1,
	name: 'BassoonGuru',
	desc: 'Deployment Website',
	address: 'https://bassoonguru.herokuapp.com/',
)

Url.create!(
	project_id: 2,
	name: 'FIS-Assist',
	desc: 'GitHub',
	address: 'https://github.com/jdhawks2132/ProjectManagementApp',
)

Url.create!(
	project_id: 2,
	name: 'FIS-Assist',
	desc: 'Deployment Website',
	address: 'https://hawksnest-c3df1.firebaseapp.com/login',
)

Url.create!(
	project_id: 3,
	name: 'Escapade',
	desc: 'GitHub',
	address: 'https://github.com/jdhawks2132/escapade',
)

Url.create!(
	project_id: 3,
	name: 'Escapade',
	desc: 'Deployment Website',
	address: 'https://jdhawks2132.github.io/escapade/',
)

Url.create!(
	project_id: 4,
	name: 'Pick Your Poison',
	desc: 'GitHub',
	address: 'https://github.com/jdhawks2132/Pick_Your_Poison',
)

Url.create!(
	project_id: 4,
	name: 'Pick Your Poison',
	desc: 'Deployment Website',
	address: 'https://jdhawks2132.github.io/Pick_Your_Poison/',
)

puts 'Creating videos...'

Video.create!(
	project_id: 1,
	name: 'BassoonGuru Demo',
	url: 'https://youtu.be/bxDpDEkQQX8',
)

Video.create!(
	project_id: 2,
	name: 'FIS-Assist Demo',
	url: 'https://youtu.be/ycgKWm1MsSc',
)
