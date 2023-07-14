import styles from './saleCards.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice, discountPrice }){
  return (
    <div className={styles.saleCard}>
      <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300}  />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta Exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.percent}>-{discount}</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>R${fullPrice}</p>
            <h4 className={styles.discprice}>R${discountPrice}</h4>
          </div>
        </div>
        <Button fullWidth>Adicionar ao carrinho</Button>
      </div>
    </div>
  )
}

SaleCard.defaultProps = {
  image: 'league-of-legends.jpg',
  discount: '90%',
  fullPrice: '199,90',
  discountPrice: '57,90'
}