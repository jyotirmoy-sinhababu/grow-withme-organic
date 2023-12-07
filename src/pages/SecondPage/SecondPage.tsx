import FirstCheckBox from '../../components/firstCheckbox/FirstCheckBox';
import SecondCheckBox from '../../components/secondCheckbox/SecondCheckBox';
import TableComp from '../../components/tableComp/TableComp';

const SecondPage = () => {
  return (
    <div>
      <TableComp />
      <div
        style={{
          display: 'flex',
          gap: '25px',
          padding: '4%',
          flexDirection: 'column',
        }}
      >
        {' '}
        <FirstCheckBox />
        <SecondCheckBox />
      </div>
    </div>
  );
};

export default SecondPage;
