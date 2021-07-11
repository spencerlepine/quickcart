import React, { useState } from 'react';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import useSpoonacular from '../../context/SpoonacularContext/SpoonacularContext.js';
import useFoodFacts from '../../context/FoodFactsContext/FoodFactsContext';
import SearchBar from 'material-ui-search-bar';
import CircularProgress from '@material-ui/core/CircularProgress';
import UPCResult from './UPCResult/UPCResult';
import PromptButtons from './PromptButtons/PromptButtons';
import UPCResultOFF from './UPCResultOFF/UPCResultOFF';
import ScanCodeBtn from '../../components/ScanCodeBtn/ScanCodeBtn';
import SearchMessage from '../../components/SearchMessage/SearchMessage';
import useStyles from './styles.js';

const SpoonUPCSearchPage = () => {
  const classes = useStyles();
  const [upcSearch, setUpcSearch] = useState('');
  const { fetchUPCItemData, loading } = useSpoonacular();
  const { fetchUPCItemData: fetchUPCItemDataOFF } = useFoodFacts();

  const handleSubmit = async (manualSearch = "") => {
    if (upcSearch) {
      const upcToSearch = manualSearch || upcSearch
      await fetchUPCItemData(upcToSearch);
      await fetchUPCItemDataOFF(upcToSearch);
    }
  }

  return (
    <div className={classes.formContainer}>
      <PromptButtons />

      <ScanCodeBtn setUpcSearch={setUpcSearch} handleSubmit={handleSubmit} />

      <div className={classes.form} noValidate>
        <div className={classes.itemDetails}>
          {loading ?
            <CircularProgress />
            :
            <SearchBar
              value={upcSearch}
              onChange={(newValue) => setUpcSearch(newValue)}
              onRequestSearch={handleSubmit}
            />}
        </div>
        <UPCResult />
        <UPCResultOFF />
        {!(fetchUPCItemData || fetchUPCItemDataOFF) && <SearchMessage message='Enter the product UPC' />}
      </div>
    </div>
  );
}

export default withAuthRedirect(SpoonUPCSearchPage);