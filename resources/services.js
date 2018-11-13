import axios from 'axios'

module.exports.predict = (imgBase64) => {
  axios({
    url: '/predict',
    method: 'POST',
    data: {
      image: imgBase64
    }
  })
}
