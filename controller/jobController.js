const addJob = async (req, res) => {
  res.status(201).send('Create Jobs');
};

const getJobs = async (req, res) => {
  res.status(201).send('Get All Jobs');
};

const updateJob = async (req, res) => {
  res.status(201).send('Update Jobs');
};

const removeJob = async (req, res) => {
  res.status(201).send('Remove Jobs');
};

const showStats = async (req, res) => {
  res.status(201).send('Stats Jobs');
};

module.exports = { addJob, getJobs, updateJob, removeJob, showStats };
