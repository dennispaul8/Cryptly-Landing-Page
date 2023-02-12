import './App.css';
// import { useState } from 'react';
import Navbar from './components/Navbar';
import MediaList from './components/MediaList';
import Footer from './components/Footer';

function App() {
  // const [value, setValue] = useState(0)

  return (
    <>
      <Navbar />
      <div className='landing_page'>
        <section className='hero_section'>
          <h1 className='hero_section__header'>
            A trusted and secure <br />cryptocurrency exchange.
          </h1>

          <p className='hero_section__paragraph'>
            Your guide to the world of an open financial system. Get started with the <br />
            easiest and most secure platform to buy and trade cryptocurrency.
          </p>

          <button className='hero_section__button'>
            Get Started Now
          </button>
        </section>

        <section className='assets_section'>
          <div className='asset_firstlayer'>
            <div>
              <div className='asset_firstlayer__bitcon'>
                <img className='asset_firstlayer__bitcon_img' src='Bitcoin.svg' alt='Bitcoin-logo' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>Bitcoin</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 53,260.20</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>BTC</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
                <img src='Graph (1).svg' alt='Market Graph'/>
                <img src='influsion.svg' alt='Influsion market' />
              </div>
            </div>

            <div>
              <div className='asset_firstlayer__eth'>
                <img className='asset_firstlayer__bitcon_img' src='ETH.svg' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>Ethereum</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 1,643.80</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>ETH</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
                <img src='eth-graph.svg' alt='Market Graph' />
                <img src='eth-influsion.svg' alt='Ethereum market' />
              </div>
            </div>

            <div>
              <div className='asset_firstlayer__bnb'>
                <img className='asset_firstlayer__bitcon_img' src='BNB.svg' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>Binance Coin</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 247.71</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>BTC</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
                <img src='bin-graph.svg' alt='Market Graph' />
                <img src='bin-influsion.svg' alt='Binance market' />
              </div>
            </div>
          </div>

          <div className='asset_secondlayer'>
            <div>
              <div className='asset_firstlayer__eth'>
                <img className='asset_firstlayer__bitcon_img' src='XRP.svg' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>XRP</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 53,260.20</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>XRP</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
                <img src='xrp-graph.svg' alt='Market Graph' />
                <img src='xrp-influsion.svg' alt='XRP market' />
              </div>
            </div>

            <div>
              <div className='asset_firstlayer__eth'>
                <img className='asset_firstlayer__bitcon_img' src='USDT.svg' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>Tether</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 0.9999</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>USDT</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
                <img src='tether-graph.svg' alt='Market Graph'/>
                <img src='tether-influsion.svg' alt='Tether market' />
              </div>
            </div>

            <div>
              <div className='asset_firstlayer__eth'>
                <img className='asset_firstlayer__bitcon_img' src='ACT.svg' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>Achain</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 40,998.21</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>ACT</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
                <img src='Graph (1).svg' alt='Market Graph'/>
                <img src='influsion.svg' alt='Influsion market' />
              </div>
            </div>
          </div>

          <div className='asset_thirdlayer'>
            <div>
              <div className='asset_firstlayer__btc'>
                <img className='asset_firstlayer__bitcon_img' src='OGN.svg' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>Origin Protocol</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 3,464.21</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>OGN</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
              <img src='bin-graph.svg' alt='Market Graph' />
                <img src='bin-influsion.svg' alt='Binance market' />
              </div>
            </div>

            <div>
              <div className='asset_firstlayer__eth'>
                <img className='asset_firstlayer__bitcon_img' src='ITC.svg' />
                <div className='asset_firstlayer__bitcon_text'>
                  <p className='asset_firstlayer__bitcon_title'>IoT Chain</p>

                  <p className='asset_firstlayer__bitcon_currency'>USD 1,443.02</p>
                </div>
                <h5 className='asset_firstlayer__bitcon_abbv'>ITC</h5>
              </div>
              <div className='asset_firstlayer__bitcon_diagram' >
              <img src='eth-graph.svg' alt='Market Graph' />
                <img src='eth-influsion.svg' alt='Ethereum market' />
              </div>
            </div>

            <div>
              <div className='asset_firstlayer__view'>
                <button className='asset_thirdlayer__viewall'>View All</button>
              </div>
            </div>
          </div>
        </section>



        <section className='features_section'>
          <h2 className='features_section__header'>
            The most trusted <br /> cryptocurrency platform.
          </h2>

          <p className='features_section__paragraph'>
            Cryptolly has a variety of features that make it the best <br /> place to start trading
          </p>

          <div className='features_section__feature'>
            <div className='features_section__feature_box'>
              <div className='features_section__feature_box__icon'>
                <img
                  className='features_section__feature_box__img'
                  src='Graph.svg'
                  alt='Pie chart'
                />
              </div>
              <h4 className='features_section__feature_box__title'>Portfolio Manager</h4>
              <p className='features_section__feature_box__subtitle'>
                Buy and sell popular digital currencies, keep track of them in the one place.
              </p>
            </div>

            <div className='features_section__feature_box__mobileapp'>
              <div className='features_section__feature_box__icon'>
                <img
                  className='features_section__feature_box__smartphone'
                  src='smartphone.svg'
                  alt='Smartphone icon'
                />
              </div>
              <h4 className='features_section__feature_box__title'>Mobile Apps</h4>
              <p className='features_section__feature_box__subtitle'>
                Stay on top of the markets with the Cryptolly app for Android or iOS.
              </p>
            </div>

            <div className='features_section__feature_box'>
              <div className='features_section__feature_box__icon'>
                <img
                  className='features_section__feature_box__lock'
                  src='Lock.svg'
                  alt='Lock Icon'
                />
              </div>
              <h4 className='features_section__feature_box__title'>Vault protection</h4>
              <p className='features_section__feature_box__subtitle'>
                For added security, store your funds in a vault with time delayed withdrawals.
              </p>
            </div>
          </div>
        </section>


        <section className='features_section'>
          <h2 className='features_section__header'>
            One click, instant payout <br /> with credit or debit card.
          </h2>

          <p className='features_section__paragraph'>
            Become a crypto owner in minutes using your debit or credit card and <br /> quickly purchase top cryptocurrencies.
          </p>
          <br />
          <br />
          <img className='buy_sell__card' src='visa-card.svg' alt='Visa Card' />
          <div className='buy_sell'>
            <span className='buySell'>
              <p className='buy_text'>Buy</p>
              <img src='Separator.svg' alt='Vertical line' />
              <p className='sell_text'>Sell</p>
            </span>
            <div className='price_box'>
              <p className='btc_rate'>1 BTC is roughly</p>
              <p className='btc_price'>53,260.20 <span className='btc_currency'>USD</span></p>
            </div>

            <form>
              <div className='convertFrom'>
                <p className='convertFrom_price'>5000</p>
                <span  className='convertFrom_currency'>
                   <img src='Separator.svg' alt='Vertical line' />
                   <img src='USD.svg' alt='USD logo'/>
                   <p className='convertFrom_currency_abbv'>USD</p>
                   <img src='arrow-down.svg' alt='Down arrow' />

                </span>
                
              </div>
              <div className='convertFrom'>
                <p className='convertFrom_price'>0.8511</p>
                <span  className='convertFrom_currency'>
                   <img src='Separator.svg' alt='Vertical line'/>
                   <img src='btc-logo.svg' alt='BTC logo' />
                   <p className='convertFrom_currency_abbv'>BTC</p>
                   <img src='arrow-down.svg' alt='Down arrow'/>

                </span>
                
              </div>
              <button className='buy_sell__button'>Buy Now</button>
            </form>
            <div className='payment_method'>
              <p className='payment_method__text'>We accept payment with many methods:</p>

              <div className='payment_medium'>
                <img src='mastercard.svg' alt='Mastercard logo'/>
                <img src='visa.svg' alt='Visa card logo' />
                <img src='apple-pay.svg' alt='Apple pay logo'/>
                <img src='google_pay.svg'alt='Google pay logo'/>
                <img src='paypal.svg' alt='Paypal logo'/>
              </div>
            </div>

          </div>
        </section>


        <section className='reason_section'>
          <h2 className='reason_section__header'>
            We are the most trusted <br /> cryptocurrency platform.
          </h2>

          <p className='reason_section__paragraph'>
            We believe Cryptolly is here to stay — and that a future worth building is one which <br /> opens its doors and invites everyone in.
          </p>

          <div className='reason_section__why'>
            <div style={{ textAlign: "center" }}>
              <div className='reason_section__reasons'>
                <img className='reason_section__reasons_img' src='show.svg' alt='Eye icon' />
              </div>
              <div className='reason_section__reasons_textbox'>
                <p className='reason_section__reasons__title'>Clarity</p>
                <p className='reason_section__reasons__body'>
                  We help you make sense of the <br />
                  coins, the terms, the dense charts <br />
                  and market changes.
                </p>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className='reason_section__reasons'>
                <img className='reason_section__reasons_img' src='shield.svg' alt='Shield icon' />
              </div>
              <div className='reason_section__reasons_textbox_confidence'>
                <p className='reason_section__reasons__title'>Confidence</p>
                <p className='reason_section__reasons__body'>
                  Our markets are always up to <br />
                  date, sparking curiosity with <br />
                  real-world relevance.
                </p>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className='reason_section__reasons'>
                <img className='reason_section__reasons_img' src='user.svg' alt='User icon'/>
              </div>
              <div className='reason_section__reasons_textbox_community'>
                <p className='reason_section__reasons__title'>Community</p>
                <p className='reason_section__reasons__body'>
                  We supports the crypto <br />
                  community, putting data in the <br />
                  hands which need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='what_media_says_section'>
          <h2 className='what_media_says_section__header'>
            What media says about Cryptolly?
          </h2>

            <MediaList/>
        </section>

        <section className='mobileplatform_section'>
          <h2 className='mobileplatform_section__header'>
            Build your crypto portfolio <br /> anywhere.
          </h2>

          <p className='mobileplatform_section__paragraph'>
            A powerful cryptocurrency exchange in your pocket. <br />
            Buy, sell and trade crypto on the go.
          </p>

          <img className='mobileplatform_section__img' src='illustration.png' alt='illustration'/>
          <p className='mobileplatform_section__paragraph'>
            Get the Cryptolly Wallet Mobile App Now!
          </p>
          
          <span className='mobileplatform_button_section'>
            <button className='mobileplatform_button'>
              <img className='mobileplatform_button__img' src='google-play-icon.svg' alt='Google play icon'/>
              <span className='mobileplatform_button__text' >
                <p className='mobileplatform_button__firstText'>GET IT ON</p>
                <p className='mobileplatform_button__secondText'>Google Play</p>
              </span>
            </button>
            <button className='mobileplatform_button'>
              <img className='mobileplatform_button__img' src='apple-app-store.svg' alt='Apple store icon'/>
              <span className='mobileplatform_button__text' >
                <p className='mobileplatform_button__firstText'>Download on the</p>
                <p className='mobileplatform_button__secondText'>App Store</p>
              </span>
            </button>
          </span>
        </section>


        <section className='cta_section'>
          <p className='cta_section__subtitle'>Ready to start trading cryptocurrency?</p>
          <h3 className='cta_section__title'>New users can earn up to $80 in crypto rewards.</h3>
          <form className='cta_section__form'>
            <input className='cta_section__form_input' placeholder='Enter you email address' type="text" />
            <button type="submit" className='cta_section__form_button'>Get Started</button>
          </form>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
