import axios from 'axios';

const getData = async () => {
	const data = {}
	return await axios
		.get(`${process.env.DOMAIN}admin/jsonapi/node/page`)
		.then(res => {
			for (const page of res.data.data) {
				if (page.attributes.title === 'Home Page') {
					data.homeTitle = page.attributes.field_header[0];
					data.homeField = page.attributes.field_header[1];
					data.homeBody = page.attributes.body.value;
				} else if (page.attributes.title === 'About Page') {
					data.aboutBody = page.attributes.body.value;
					data.aboutImageId = page.relationships.field_picture.data[0].id
					data.aboutImageAlt = page.relationships.field_picture.data[0].meta.alt			
					data.aboutImageTitle = page.relationships.field_picture.data[0].meta.title			
				}
			}
			return data
		}).then(res => {
			return axios.get(`${process.env.DOMAIN}admin/jsonapi/file/file/${res.aboutImageId}`).then(res => {
				data.aboutImageUrl = res.data.data.attributes.uri.url
				return data
			})
		}).catch(error => console.log(error))
}

export { getData }