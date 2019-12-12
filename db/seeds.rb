# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
beverage1 = Beverage.create(name: "Agua de Manzana")
beverage2 = Beverage.create(name: "Agua de Piña", selected: true)
Beverage.create(name: "Chicha Morada")
Beverage.create(name: "Hierba Luisa")
Beverage.create(name: "Manzanilla")

starter1 = Starter.create(name: "Yuquitas con salsa de Rocoto", selected: true)
starter2 = Starter.create(name: "Ensalada Fresca", selected: true)
Starter.create(name: "Ceviche")
Starter.create(name: "Chicharrón de Pescado")
Starter.create(name: "Tequeños de Queso con Salsa Guacamole")
Starter.create(name: "Aguadito")

mainCourse1 = MainCourse.create(name: "Tallarines al Pesto con Bisteck", selected: true)
beverage2 = MainCourse.create(name: "Lomo Saltado a lo Pobre")
MainCourse.create(name: "Pollo a la Plancha con Ensalada")
MainCourse.create(name: "Locro de Zapallo con Huevo Frito")
MainCourse.create(name: "Arroz Chaufa")

Order.create(starter_id:starter1.id, beverage_id:beverage1.id, mainCourse_id:mainCourse1.id, status:1)
Order.create(starter_id:starter2.id, beverage_id:beverage2.id, mainCourse_id:mainCourse2.id)
p "seeds were uploaded"
