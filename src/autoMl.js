'use strict';

const fs = require('fs');
const projectId = 'image-222216',
  region = 'us-central1',
  model = 'ICN7434248545826785836';

const { PredictionServiceClient } = require('@google-cloud/automl').v1beta1;
const predictClient = new PredictionServiceClient();

module.exports = (() => {

  const getPathName = () => {
    return predictClient.modelPath(projectId, region, model);
  }

  const getPayload = ({imageBytes}) => {
    return {
      image: {
        imageBytes
      }
    }
  }

  const predict = async (request, reply) => {
    try {
      const b64String = request.body.image;
      const imageBytes = Buffer.from(b64String, 'base64');

      const name = getPathName();
      const payload = getPayload({imageBytes});

      const responses = await predictClient.predict({ name, payload })
      reply.send( responses )

    } catch (error) {
      console.log('error', error)
      reply.send(error)
    }
  }

  return {
    predict
  }

})()
