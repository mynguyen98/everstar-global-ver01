const lang_switch_reducer = (state, action) => {
  if (action.type === "TOGGLE_LANGUAGE") {
    const toggleLang = state.locale === "en" ? "ko" : "en";
    console.log("reducer lang", toggleLang);
    return { ...state, lang: toggleLang };
  }
};

export default lang_switch_reducer;
