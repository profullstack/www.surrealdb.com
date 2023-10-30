IF $scope = "admin" {
    SELECT * FROM admin_data WHERE access_level = 'full'
}
ELSE IF $scope = "user"
{
    IF $auth.role = "premium" {
        IF $auth.subscription_status = "active" {
             SELECT * FROM premium_user_data WHERE active = 1
		}
        ELSE IF $auth.subscription_status = "trial" {
            SELECT * FROM trial_user_data
		}
        ELSE
             SELECT * FROM basic_user_data
	}
    ELSE IF $auth.role = "standard" {
        SELECT * FROM standard_user_data WHERE region = 'US'
	}
    ELSE IF $auth.role = "standard" AND $auth.subscription_status = "active" {
        SELECT * FROM standard_user_data WHERE region = 'EU'
	}
    ELSE {
        SELECT * FROM unauthorized_user_data
	}
}
ELSE
    {
		SELECT * FROM unknown_scope_data
	}

