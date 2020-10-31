import React from 'react'

import './newsLetter.css'

const CONVERTKIT_FORM_ID = '1782983'

class NewsLetter extends React.Component {

    render() {
        const form = {
            id: CONVERTKIT_FORM_ID,
            title: 'Subscribe to the Newsletter',
            subTitle: 'Subscribe to get my latest content by email.',
            buttonText: 'Subscribe',
        };
        return (
          <form
            action={`https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`}
            className="seva-form formkit-form"
            method="POST"
            min-width="400 500 600 700 800"
            style={{
              boxShadow: '#000',
              borderRadius: '6px',
            }}
          >
            <div data-style="full">
              <div
                data-element="column"  
                className="formkit-column"
                style={{ boxShadow: '#000', borderRadius: '6px' }}
              >
                <h1
                  className="formkit-header"
                  data-element="header"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  {form.title}
                </h1>
                <div
                  data-element="subheader"
                  className="formkit-subheader"
                >
                  <p>{form.subTitle}</p>
                </div>
                <div className="formkit-image">
                 
                </div>
              </div>
              <div data-element="column" className="formkit-column">
                <ul
                  className="formkit-alert formkit-alert-error"
                  data-element="errors"
                  data-group="alert"
                />
    
                <div data-element="fields" className="seva-fields formkit-fields">
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      aria-label="Your first name"
                      name="fields[first_name]"
                      placeholder="Your first name"
                      type="text"
                      style={{
                        borderColor: 'rgb(227, 227, 227)',
                        borderRadius: '4px',
                        color: 'rgb(0, 0, 0)',
                        fontWeight: 400,
                      }}
                      required
                    />
                  </div>
                  <div className="formkit-field">
                    <input
                      className="formkit-input"
                      name="email_address"
                      aria-label="Your email address"
                      placeholder="Your email address"
                      required
                      type="email"
                      style={{
                        borderColor: 'rgb(227, 227, 227)',
                        borderRadius: '4px',
                        color: 'rgb(0, 0, 0)',
                        fontWeight: 400,
                      }}
                    />
                  </div>
                  <button
                    data-element="submit"
                    className="formkit-submit formkit-submit"
                    style={{
                      backgroundColor: '#007acc',
                      borderRadius: '24px',
                      color: 'white',
                      fontWeight: 700,
                    }}
                  >
                    <div className="formkit-spinner" />
                    <span>{form.buttonText}</span>
                  </button>
                </div>
                <div
                  data-element="guarantee"
                  className="formkit-guarantee"
                  style={{
                    fontSize: '13px',
                    fontWeight: 400,
                  }}
                >
                  <p>I won’t send you spam.</p>
                  <p>
                    Unsubscribe at <em>any</em> time.
                  </p>
                </div>
              </div>
            </div>
          </form>
        );
      }
    
}

export default NewsLetter