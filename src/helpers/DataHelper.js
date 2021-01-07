import axios from 'axios';

const getData = async () => {
	const data = {home: {}, about: {}}
	return await axios
		.get(`${process.env.DOMAIN}admin/jsonapi/node/page`)
		.then(res => {
			for (const page of res.data.data) {
				if (page.attributes.title === 'Home Page') {
					data.home.title = page.attributes.field_header[0];
					data.home.field = page.attributes.field_header[1];
					data.home.body = page.attributes.body.value;
				} else if (page.attributes.title === 'About Page') {
					data.about.body = page.attributes.body.value;
					data.about.imageId = page.relationships.field_picture.data[0].id
					data.about.imageAlt = page.relationships.field_picture.data[0].meta.alt			
					data.about.imageTitle = page.relationships.field_picture.data[0].meta.title			
				}
			}
			return data
		}).then(res => {
			return axios.get(`${process.env.DOMAIN}admin/jsonapi/file/file/${res.about.imageId}`).then(res => {
				data.about.imageUrl = res.data.data.attributes.uri.url
				console.log(data)
				return data
			})
		}).catch(error => console.log(error))
}

export { getData }