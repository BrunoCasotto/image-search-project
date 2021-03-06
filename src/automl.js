'use strict';
const fs = require('fs');
const projectId = process.env.PROJECT_ID || 'image-222216',
  region = process.env.PROJECT_LOCALE || 'us-central1',
  model = process.env.MODEL || 'ICN4066807235321266415';

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

  const normalizeBase64 = (data) => {
    try {
      return data.split('data:image/png;base64,')[1];
    } catch (error) {
      console.log('error', error)
      return '';
    }
  }
  
  /**
   * function to concat the result to build a query search
   * @param {array} resArr 
   */
  const generateStringResults = (resArr) => {
    if(!resArr) return '';

    if(resArr.length === 1) return resArr[0].displayName;

    return `${resArr[0].displayName}+${resArr[1].displayName}`;
  }

  /**
   * function to sort the api results
   * @param {object} apiResults 
   */
  const createResult = (apiResults) => {
    const [{payload}] = apiResults;

    payload.sort((res1, res2) => {
      return res1.classification.score < res2.classification.score;
    })

    return generateStringResults(payload);
  }

  /**
   * function to search image
   * @param {object} request 
   * @param {object} reply 
   */
  const predict = async (request, reply) => {
    try {
      const imageBytes = normalizeBase64(request.body.image);

      const name = getPathName();
      const payload = getPayload({imageBytes});
      
      console.log('predict-send', name);
      const responses = await predictClient.predict({ name, payload });
      console.log('predict-response', responses);

      const result = createResult(responses);

      console.log('predict-result', JSON.stringify(result));
      reply.send(result);

    } catch (error) {
      console.log('error', error)
      reply.send(error)
    }
  }

  return {
    predict
  }

})()
