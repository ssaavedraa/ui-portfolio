import maintenanceImage from '../../assets/Maintenance.svg'
import './Maintenance.css'

export function Maintenance ({ id }: { id: string }): JSX.Element {
  return (
    <section className="maintenance" id={id}>
      <h1>This section is under maintenance</h1>
      <img src={maintenanceImage} alt="" />
      <h3>Will be back soon</h3>
    </section>
  )
}
