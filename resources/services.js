import axios from 'axios'

module.exports.predict = async (imgBase64) => {
  const options = {
    url: '/predict',
    method: 'POST',
    data: {
      image: imgBase64
    }
  };

  const result = await axios(options);
  let url = 'https://www.netshoes.com.br/busca';

  if(result.data) {
    url = `https://www.netshoes.com.br/busca?nsCat=Natural&q=${result.data}`;
  }

  window.location.href = url;
}

module.exports.getDeviceId = async (callback) => {
  const devices = await navigator.mediaDevices.enumerateDevices();

  const videosDevices = devices.filter(device => {
    return device.kind === 'videoinput';
  });

  if(videosDevices.length > 1) {
    callback(videosDevices[1].deviceId);
  } else {
    callback(videosDevices[0].deviceId);
  }
}
