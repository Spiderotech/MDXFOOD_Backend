

const Login = async (email, password, dbrepository, authService) => {

  const isEmail = await dbrepository.userexistemail(email)
  console.log(isEmail, "login");
  if (isEmail != null && isEmail.password) {

    const isPassword = await authService.comparePassword(password, isEmail.password)

    if (isPassword) {

      const isRestaurant = {
        userId:isEmail._id,
        userName:isEmail.name,
        userLocation:isEmail.location,
        userEmail:isEmail.email,
        userImg: isEmail.restaurantImage,
      };

      const accessToken = await authService.generateAccessToken(isRestaurant);

      return { status: true, isRestaurant, accessToken };

    } else {

      return ({ status: false })

    }



  } else {
    return ({ message: 'Invalid email or password', status: false })
  }


}
export default Login