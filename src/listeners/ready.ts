import { ApplyOptions } from '@sapphire/decorators';
import { Listener, Store } from '@sapphire/framework';
import { blue, gray, green, magenta, magentaBright, white, yellow } from 'colorette';
import { PMAEventHandler } from '../baseBot/lib/Utilities';
import { setClient } from '../lib/ClientExtractor';

const dev = process.env.NODE_ENV !== 'production';

@ApplyOptions<Listener.Options>({ once: true })
export default class ReadyEvent extends Listener {
  private readonly style = dev ? yellow : blue;

  public run() {
    this.printBanner();
    this.printStoreDebugInformation();

    setClient(this.container.client);
    PMAEventHandler.emit('HoFRefresh');
    PMAEventHandler.emit('SARefresh');
    PMAEventHandler.emit('LBRefresh');
  }

  private printBanner() {
    const success = green('+');

    const llc = dev ? magentaBright : white;
    const blc = dev ? magenta : blue;

    const line01 = llc('');
    const line02 = llc('');
    const line03 = llc('');

    // Offset Pad
    const pad = ' '.repeat(7);

    console.log(
      String.raw`
${line01} ${pad}${blc('1.0.0')}
${line02} ${pad}[${success}] Gateway
${line03}${dev ? ` ${pad}${blc('<')}${llc('/')}${blc('>')} ${llc('DEVELOPMENT MODE')}` : ''}
		`.trim(),
    );
  }

  private printStoreDebugInformation() {
    const { client, logger } = this.container;
    const stores = [...client.stores.values()];
    const last = stores.pop()!;

    // eslint-disable-next-line no-restricted-syntax
    for (const store of stores) logger.info(this.styleStore(store, false));
    logger.info(this.styleStore(last, true));
  }

  private styleStore(store: Store<any>, last: boolean) {
    return gray(
      `${last ? '└─' : '├─'} Loaded ${this.style(store.size.toString().padEnd(3, ' '))} ${
        store.name
      }.`,
    );
  }
}
