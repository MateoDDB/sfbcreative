# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do
  job = Job.new(
    category: "UX Designer",
    location: "Paris",
    contract_type: "CDI",
    description:  "Le designer UX (user eXperience) et le designer UI (user interface) est une évolution et une spécialisation récente du métier de web designer. Le premier s'intéresse à l'expérience utilisateur, le second à la conception de l'interface produit."
  )
  job.save!
end
