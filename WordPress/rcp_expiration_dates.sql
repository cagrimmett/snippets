SELECT user_id, meta_key, meta_value
	FROM wp_usermeta
	WHERE meta_key = 'rcp_expiration'
	AND meta_value != 'none';

UPDATE wp_usermeta
	SET meta_value = 'none'
	WHERE meta_key = 'rcp_expiration'
	AND meta_value != 'none';
