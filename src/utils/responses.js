import message from './messages.json' assert {type: 'json'}

export const makeResponsesError = (res, code) => {
  const msg = {
    OK: 0,
    Message: message[[code]]
  }
  res.status(404).json(msg)
}

export const makeResponsesException = (res, err) => {
  const msg = {
    OK: 0,
    Message: err
  }
  res.status(404).json(msg)
}

export const makeResponsesOk = (res, code) => {
  const msg = {
    OK: 1,
    Message: message[[code]]
  }
  res.status(200).json(msg)
}

export const makeResponsesOkData = (res, data, code) => {
  const msg = {
    OK: 1,
    Data: data,
    Message: message[[code]]
  }
  res.status(200).json(msg)
}

