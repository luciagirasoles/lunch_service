# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Beverage.create(name: "Agua de Manzana")
Beverage.create(name: "Agua de Piña")
Beverage.create(name: "Chicha Morada")
Beverage.create(name: "Hierba Luisa")
Beverage.create(name: "Manzanilla")

Starter.create(name: "Yuquitas con salsa de Rocoto")
Starter.create(name: "Ensalada Fresca")
Starter.create(name: "Ceviche")
Starter.create(name: "Chicharrón de Pescado")
Starter.create(name: "Tequeños de Queso con Salsa Guacamole")
Starter.create(name: "Aguadito")

MainCourse.create(name: "Tallarines al Pesto con Bisteck")
MainCourse.create(name: "Lomo Saltado a lo Pobre")
MainCourse.create(name: "Pollo a la Plancha con Ensalada")
MainCourse.create(name: "Locro de Zapallo con Huevo Frito")
MainCourse.create(name: "Arroz Chaufa")

p "seeds were uploaded"