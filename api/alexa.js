module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(200).send('Capsule Alexa endpoint');
  try {
    const data = req.body;
    const type = data?.request?.type || '';
    res.status(200).json({
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: type === 'LaunchRequest' 
            ? 'Hola Felix, soy Capsule. Dime que necesitas.'
            : 'Hola Felix.'
        },
        shouldEndSession: type === 'LaunchRequest' ? false : true
      }
    });
  } catch(e) {
    res.status(200).json({
      version: '1.0',
      response: { outputSpeech: { type: 'PlainText', text: 'Error' }, shouldEndSession: true }
    });
  }
};
