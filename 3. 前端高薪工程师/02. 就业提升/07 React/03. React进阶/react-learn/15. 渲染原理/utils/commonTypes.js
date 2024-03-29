import PropTypes from "prop-types";

export default {
  children: PropTypes.node,
  groupDatas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ), //多选框组、单选框组、下拉列表的数据源
  chooseDatas: PropTypes.arrayOf(PropTypes.string),
  //   单个表单项的数据
  infoData: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
