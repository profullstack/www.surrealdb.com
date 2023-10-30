IF $scope = "admin" {
	SELECT * FROM account
} ELSE IF $scope = "user" {
  SELECT * FROM $auth.account
}
