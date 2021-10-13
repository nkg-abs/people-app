import { rndString } from '@laufire/utils/random';

const config = {
	id: rndString(),
	genders: ['male', 'female'],
	maritalState: ['married', 'single'],
};

export default config;
