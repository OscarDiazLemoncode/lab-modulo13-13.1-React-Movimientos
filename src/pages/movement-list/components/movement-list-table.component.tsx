import { MovementListItemComponent } from './movement-list-item.component';
import classes from './movement-list-table.component.module.css';

export const AccountListTableComponent = () => {
  return (
    <>
      <div className={classes.headerContainer}>
        <h2 className={(classes.bold, classes.header)}>Alias: Gatos mes</h2>
        <h2 className={(classes.bold, classes.header)}>IBAN</h2>
      </div>
      <MovementListItemComponent />
    </>
  );
};
