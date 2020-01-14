const SuperModule = () => {
  const a = () => {
    return "213123";
  };
  const b = () => {
    return a() + 5;
  };

  return { a, b };
};

module.exports = SuperModule();
