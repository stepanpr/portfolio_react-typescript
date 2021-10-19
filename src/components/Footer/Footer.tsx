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

	const { 
		register, 
		handleSubmit 
	} = useForm();

	const handler = (data: any) => { console.log('success!', data) }

	return (
			<div className={footerClassNames}>
				<div className={containerClassNames}>

					<div>footer</div>
					<div>
						<form onSubmit={handleSubmit(handler)}>
							<input type="text" {...register('name')} placeholder='Имя' />
							<input type="text" {...register('phone')} placeholder='Телефон' />
							<input type="text" {...register('email')} placeholder='Email' />
							<textarea {...register('message')}></textarea>


							<input type="submit" />
						</form>
					</div>

				</div>
			</div>
	);
}