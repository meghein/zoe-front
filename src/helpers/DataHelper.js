import axios from 'axios';

const getData = async () => {
	const data = {}
	return await axios
		.get('http://zoe.meghanhein.com/admin/jsonapi/node/page')
		.then(res => {
			for (const page of res.data.data) {
				if (page.attributes.title === 'Home Page') {
					data.title = page.attributes.field_header[0]
					data.field = page.attributes.field_header[1]
					data.body = page.attributes.body.value;
				}
			}
			return data
		})
		.catch(error => console.log(error))
}

export { getData }