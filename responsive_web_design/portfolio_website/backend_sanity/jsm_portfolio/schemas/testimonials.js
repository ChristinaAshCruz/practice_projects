export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      // name of the person
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      // the company they're from
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      // their profile image
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      // and their feedback
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
