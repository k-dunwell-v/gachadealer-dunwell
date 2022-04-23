const ItemListContainer = ({greet}) => {
    return (

        <div class="mockup-code">
            <pre data-prefix="$"><code>npm i {greet}</code></pre> 
            <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
        </div>

    )
}

export default ItemListContainer
