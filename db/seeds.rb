10.times do
  department = Department.create(
    name: Faker::Commerce.department
  )

  30.times do
    product = Product.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
      department_id: department.id
    )
  end
end

puts "Seeds Created"