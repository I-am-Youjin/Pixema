import React, { useState, useEffect } from "react";
import { TabsWrapper } from "./styles";
import FilterTab from "./FilterTab";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";

const FilterTabs = () => {
  const year = useTypedSelector((state) => state.films.searchValue.y);
  const type = useTypedSelector((state) => state.films.searchValue.type);
  const resp = useTypedSelector((state) => state.films.searchValue.respStatus);
  const search = useTypedSelector((state) => state.films.searchValue.s);
  const page = useTypedSelector((state) => state.films.searchValue.page);
  const { setTypeFilter, setYearFilter, setSearchValue, getFilmsAsync } =
    useActions();

  const [typeValue, setTypeValue] = useState(type);
  const [yearValue, setYearValue] = useState(year);

  const handleClearYearFilter = () => {
    setYearFilter("");
    setSearchValue({
      s: search,
      page: page,
      type: type,
      y: "",
      respStatus: resp,
    });
    getFilmsAsync({
      s: search,
      page: page,
      type: type,
      y: "",
      respStatus: resp,
    });
  };
  const handleClearTypeFilter = () => {
    setTypeFilter("");
    setSearchValue({
      s: search,
      page: page,
      type: "",
      y: year,
      respStatus: resp,
    });
    getFilmsAsync({
      s: search,
      page: page,
      type: "",
      y: year,
      respStatus: resp,
    });
  };

  useEffect(() => {
    setTypeValue(type);
    setYearValue(year);
  }, [type, year]);

  return (
    <TabsWrapper>
      <FilterTab
        title={typeValue}
        onClick={handleClearTypeFilter}
        visability={!!typeValue}
      ></FilterTab>
      <FilterTab
        title={yearValue}
        onClick={handleClearYearFilter}
        visability={!!yearValue}
      ></FilterTab>
    </TabsWrapper>
  );
};

export default FilterTabs;
