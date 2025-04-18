function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Merge all user arrays into one using spread operator
  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  // Add merge_date in M/d/yyyy format
  const currentDate = new Date();
  combinedObject.merge_date = currentDate.toString('M/d/yyyy');

  return combinedObject;
}
``






module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};