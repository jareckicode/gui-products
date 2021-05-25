/**
 * BLOCK: products
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import Edit from './Edit';
// const { withSelect } = wp.data;
// const { InspectorControls } = wp.blockEditor;
// const { Placeholder, PanelBody, RangeControl } = wp.components;

registerBlockType( 'cgb/block-products', {
	title: __( 'Produkty' ), 
	icon: 'products', 
	category: 'common', 
	keywords: [
		__( 'Products' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		termId: {
			type: 'number',
			default: 0
		},
		numSlides: {
			type: 'number',
			default: 1
		},
	},

	// edit: (select, props ) => {
	// 	const { attributes, setAttributes } = props;
	// 	const { numberOfPosts } = attributes;
	// 	let query = {per_page: numberOfPosts};

	// 	withSelect({
	// 		posts: select('core').getEntityRecords('postType', 'products', query)
	// 	})
		
	// 	return ( 
	// 		{console.log(this.props)},
	// 		<div className={props.className}>
	// 		<InspectorControls>
	// 			<PanelBody
	// 				title={__('Slider Ustawienia')}
	// 				initialOpen={true}
	// 			>
	// 				<RangeControl
	// 					label={__('Ilosc slajdów')}
	// 					value={attributes.numSlides}
	// 					onChange={(val) => setAttributes({ numSlides: val })}
	// 					min={1}
	// 					max={5}
	// 				/>
	// 			</PanelBody>
	// 		</InspectorControls>

	// 		<Placeholder
	// 			label={__('Slider z produktami')}
	// 		>
	// 			Trwa ładowanie produktów
	// 		</Placeholder>
	// 	</div>
			
	// 	)
	// },
	save: () => {
		return null;
	},
	edit: Edit
} );
