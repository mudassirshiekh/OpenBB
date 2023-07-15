from openbb_core.app.model.command_context import CommandContext
from openbb_core.app.model.command_output import CommandOutput
from openbb_core.app.provider_interface import (
    ExtraParams,
    ProviderChoices,
    StandardParams,
)
from openbb_core.app.query import Query
from openbb_core.app.router import Router
from pydantic import BaseModel

router = Router(prefix="")


# pylint: disable=unused-argument
@router.command(model="ForexPairs")
def pairs(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> CommandOutput[BaseModel]:
    """Forex Available Pairs."""
    return CommandOutput(results=Query(**locals()).execute())


# pylint: disable=unused-argument
@router.command(model="ForexEOD")
def load(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> CommandOutput[BaseModel]:
    """Forex Intraday Price."""
    return CommandOutput(results=Query(**locals()).execute())
