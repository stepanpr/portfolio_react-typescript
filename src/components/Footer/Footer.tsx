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
		watch
	} = useForm();

	const handler = (data: any) => { console.log('success!', data) };

	const name = watch('name');
	const phone = watch('phone');
	const email = watch('email');
	const message = watch('message');


	console.log(name, phone, email, message);

	return (
			<div className={footerClassNames}>
				<div className={containerClassNames}>
					<div className={footerContainerClassNames}>
						<div className="footer-container__social-box">
							footer
						</div>
						<div className="footer-container__form-box">
							<form onSubmit={handleSubmit(handler)}>
								<input type="text" {...register('name', {required: true})} placeholder='Имя' />
								<input type="text" {...register('phone')} placeholder='Телефон' />
								<input type="text" {...register('email')} placeholder='Email' />
								<textarea {...register('message')}></textarea>


								<input type="submit" />
							</form>
						</div>
					</div>	
				</div>
			</div>
	);
}