file = SurMlFile(model=model, name="House Price Prediction", inputs=test_inputs)

file.add_description("This model predicts the price of a house based on its square footage and number of floors.")
file.add_version("0.0.1")

file.add_column("squarefoot")
file.add_column("num_floors")
file.add_output("house_price", "z_score", house_price_mean, house_price_std)

file.add_normaliser("squarefoot", "z_score", squarefoot_mean, squarefoot_std)
file.add_normaliser("num_floors", "z_score", num_floors_mean, num_floors_std)
file.save("./linear_test.surml")

new_file = SurMlFile.load("./linear_test.surml")
print(new_file)

print(new_file.raw_compute([1.0, 2.0], [1, 2]))
print(new_file.raw_compute([1.0, 2.0]))
print(new_file.buffered_compute({
    "squarefoot": 3200.0,
    "num_floors": 2.0
}))
