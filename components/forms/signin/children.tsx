import { ComponentStepProps } from 'interfaces/steps'

const Childs = ({ nextStep }: ComponentStepProps) => {
  return (
    <div className="personal-data">
      <div className="personal-data__title">
        <h2>BEBES</h2>
      </div>
      <div className="personal-data__form">
        <div className="personal-data__form-item">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="personal-data__form-item">
          <label htmlFor="lastname">Last name</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
        <div className="personal-data__form-item">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="personal-data__form-item">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="personal-data__form-item">
          <label htmlFor="password-confirm">Confirm password</label>
          <input
            type="password"
            id="password-confirm"
            name="password-confirm"
          />
        </div>
      </div>
    </div>
  )
}

export default Childs
