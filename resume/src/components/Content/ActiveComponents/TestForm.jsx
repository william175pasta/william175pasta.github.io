import * as React from 'react';

const TestForm = () => {
    return (
        <div>
            <form action="###" method="get">
                <fieldset>
                    <legend>FormTest:</legend>
                    <label>Name:
                        <input type="text" name="name" />
                    </label><br />
                    <label>gender:
                        <input type="radio" name="gender" value="boy" />boy
                        <input type="radio" name="gender" value="girl" />girl
                    </label><br />
                    <label>Email:
                        <input type="email" name="email" />
                    </label><br />
                    <label>Password:
                        <input type="password" name="password" maxLength="10" />
                    </label><br />
                </fieldset>
                <fieldset>
                    <legend>FormTest:</legend>
                    <label>你喜歡的瀏覽器:
                    <select>
                            <option value="Google">Google</option>
                            <option value="Msn">Msn</option>
                            <option value="Yahoo">Yahoo</option>
                            <option value="other">Other</option>
                        </select>
                    </label><br />
                    <label>你使用的framework:</label>
                    <label>
                        <input type="checkbox" name="framework" value="Vue" />Vue
                    </label>
                    <label>
                        <input type="checkbox" name="framework" value="React" />React
                    </label>
                    <label>
                        <input type="checkbox" name="framework" value="Angular" />Angular
                    </label><br />
                    <label>Comments:</label><br />
                    <textarea style={{ row: 4, cols: '40' }} placeholder="Enter Comments">
                    </textarea>
                    <br />
                    <input type="submit" value="submit" />
                </fieldset>
            </form>
        </div >
    )
}
export default TestForm