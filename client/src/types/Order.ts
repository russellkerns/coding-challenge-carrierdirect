import Cupcake from './Cupcakes';

export default interface Order {
  cupcakes: Array<Cupcake>;
  delivery_date: Date;
  id: string;
}
