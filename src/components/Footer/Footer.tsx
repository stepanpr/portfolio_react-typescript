import React from "react";
import classnames from 'classnames';
import { useForm } from "react-hook-form";

import './styles.css'

interface FooterProps {
	mediaQueries: any;
}

export const Footer: React.FunctionComponent<FooterProps> = (props) => {


	const footerClassNames = classnames({
		'footer': true,
	});
	const containerClassNames = classnames({
		'container-x': props.mediaQueries.isDesktopOrLaptop,
		'container-m': props.mediaQueries.isTabletOrMobile,
		'container-s': props.mediaQueries.isMobile,
	});
	
	const footerContainerClassNames = classnames({
		'footer-container': true
	});

	const { 
		register, 
		handleSubmit,
		formState: { errors, submitCount },
		watch,
		clearErrors
	} = useForm();

	/* обработка отправленных данных */
	const onSubmit = (data:any, e:any) => {
		alert(JSON.stringify(data));
		console.log(data, e);
	}
	/* обработка ошибок */
	const onError = (errors: any, e: any) => console.log(errors.name, e);

	const name = watch('name');
	const phone = watch('phone');
	const email = watch('email');
	const message = watch('msg');

	console.log('WATCH:', name, phone, email, message);

	return (
			<div className={footerClassNames}>
				<div className={containerClassNames}>
					<div className={footerContainerClassNames}>
						<div className="footer-container__social-box">
							<p>text text text</p> 
						</div>
						<div className="footer-container__form-box">

							<form onSubmit={handleSubmit(onSubmit, onError)}>
								
								<input type="text" 
								{...register('name', 
								{required: 'Поле \'Имя\' обязательно для заполнения', minLength: {value: 2, message: 'Слишком короткое имя'}, 
								maxLength: {value: 20, message: 'Слишком длинное имя'}})} placeholder='Имя' />
								<div className='error-block'>{errors.name && <p className='error-message'> {errors.name.message} </p>}</div>
								
								
								<input type="text" 
								{...register('phone', {required: 'Введите номер телефона', minLength: {value: 2, message: 'Номер слишком короткий'}, 
								maxLength: {value: 20, message: 'Слишком длинный номер'}})} placeholder='Телефон' />
								<div className='error-block'>{errors.phone && <p className='error-message'> {errors.phone.message} </p>}</div>

								<input type="text" {...register('email', {required: 'Введите e-mail'})} placeholder='Email' />
								<div className='error-block'>{errors.email && <p className='error-message'> {errors.email.message} </p>}</div>

								<textarea {...register('msg', {required: 'Введите текст сообщения', minLength: {value: 2, message: 'Сообщение слишком короткое'} })} 
								placeholder='Сообщение'></textarea>
								<div className='error-block'>{errors.msg && <p className='error-message-textarea'> {errors.msg.message} </p>}</div>

								<input type="submit" />
							</form>

						</div>
					</div>
					
					<div className="copyright">
					<p>react.ru</p>
					<p>&copy; React Site</p>
					</div>
				</div>
			</div>
	);
}